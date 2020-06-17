import { h, Component } from 'preact';
import React from 'preact/compat';
import {Chrome} from "../../utils/types";
import {changeExtensionIcon, loadScript} from "../../utils/helpers";
import {getEventsList, sendMessageToBackground, sendMessageToPage} from "../../utils/messageUtil";
import {STOP_RECORDING, DELETE_RECORDING_SESSION, GET_CODE} from "../../constants";
import CodeGenerator from "../code-generator";

const newWindowSVG = (<svg enable-background="new 0 0 511.626 511.627" version="1.1" viewBox="0 0 511.63 511.63" height="15" width="15" style="display: inline;"><path d="m392.86 292.35h-18.274c-2.669 0-4.859 0.855-6.563 2.573-1.718 1.708-2.573 3.897-2.573 6.563v91.361c0 12.563-4.47 23.315-13.415 32.262-8.945 8.945-19.701 13.414-32.264 13.414h-237.54c-12.562 0-23.317-4.469-32.264-13.414-8.945-8.946-13.417-19.698-13.417-32.262v-237.54c0-12.562 4.471-23.313 13.417-32.259 8.947-8.947 19.702-13.418 32.264-13.418h200.99c2.669 0 4.859-0.859 6.57-2.57 1.711-1.713 2.566-3.9 2.566-6.567v-18.275c0-2.662-0.855-4.853-2.566-6.563-1.711-1.713-3.901-2.568-6.57-2.568h-200.99c-22.648 0-42.016 8.042-58.102 24.125-16.08 16.082-24.122 35.45-24.122 58.098v237.54c0 22.647 8.042 42.018 24.123 58.095 16.086 16.084 35.454 24.13 58.102 24.13h237.54c22.647 0 42.017-8.046 58.101-24.13 16.085-16.077 24.127-35.447 24.127-58.095v-91.358c0-2.669-0.856-4.859-2.574-6.57-1.713-1.718-3.903-2.573-6.565-2.573z"></path><path d="m506.2 41.971c-3.617-3.617-7.905-5.424-12.85-5.424h-146.18c-4.948 0-9.233 1.807-12.847 5.424-3.617 3.615-5.428 7.898-5.428 12.847s1.811 9.233 5.428 12.85l50.247 50.248-186.15 186.15c-1.906 1.903-2.856 4.093-2.856 6.563 0 2.479 0.953 4.668 2.856 6.571l32.548 32.544c1.903 1.903 4.093 2.852 6.567 2.852s4.665-0.948 6.567-2.852l186.15-186.15 50.251 50.248c3.614 3.617 7.898 5.426 12.847 5.426s9.233-1.809 12.851-5.426c3.617-3.616 5.424-7.898 5.424-12.847v-146.18c-1e-3 -4.952-1.814-9.232-5.428-12.847z"></path></svg>);
class App extends Component<any, any> {
    constructor(props: any) {
        super(props);
        this.handleStartRecordingClick = this.handleStartRecordingClick.bind(this);
        this.handleExportTestsClick = this.handleExportTestsClick.bind(this);
    }

    async injectRecorder(){
        const {tabId} = this.props;
        // @ts-ignore
        await loadScript('inject', tabId);
        window.close();
    }

    getEventsList(){
        const {tabId} = this.props;
        return getEventsList(tabId).then(async events => {
            this.setState({events: events});
        });
    }

    async componentDidMount() {
        const {tabId, isSessionGoingOn} = this.props;

        if (isSessionGoingOn) {
            await this.getEventsList();
        }
    }

    renderEventsList(){
        const {events} = this.state;
        if(!events) return null;
        return (
            <ol id="events_list">
            {events.map((event: any) => {
            const {event_type, selector, value} = event;
            return (
                <li>
                    <div class="event_item">
                        <div class="event_action">{event_type}  {selector && value ? `("${selector}")` : null}</div>
                        <div class="event_action_or_value">{selector && value ? (typeof(value) === 'object'? JSON.stringify(value):value) : selector}</div>
                    </div>
                </li>
                )
                })}
            </ol>
        );
    }

    stopRecorder(){
        const {tabId} = this.props;
        sendMessageToPage({type: STOP_RECORDING});
        sendMessageToBackground({type: DELETE_RECORDING_SESSION, payload: {tabId: tabId}});
    }

    getPlayWrightCode(){
        const {events} = this.state;
        this.stopRecorder();
        sendMessageToPage({type: GET_CODE, events});
    }

    renderSteps(){
        return (
            <>
                <div id="icon" class="center-aligned" style={{background: `url(${Chrome.runtime.getURL("icons/crusher.svg")})`, width: 98, height: 49}}></div>
                <ol id="steps" class="numbered-list">
                    <li>Basic actions are supported by default 🎉. For extensive actions, click on plus sign.</li>
                    <li>For mobile - Decrease window width to minimum. </li>
                    <li>To export, press stop sign </li>
                    <li><a href="https://google.com" target="_blank">Read instruction {newWindowSVG}</a> </li>
                </ol>
            </>
        )
    }

    async handleStartRecordingClick(){
        await this.injectRecorder();
        window.close();
    }

    handleExportTestsClick(){
        this.stopRecorder();
        this.getPlayWrightCode();
        window.close();
    }

    render() {
        const {isSessionGoingOn} = this.props;
        return (
            <div id="container">
                <div id="header">Crusher Test Recorder</div>
                <div class="content" style={{padding: isSessionGoingOn ? 0 : 18}}>
                    {!isSessionGoingOn && this.renderSteps()}
                    {isSessionGoingOn && this.renderEventsList()}
                </div>
                <div id="footer">
                    {!isSessionGoingOn && (<button class="right-aligned button" onClick={this.handleStartRecordingClick}>Start Recording</button>)}
                    {isSessionGoingOn && (<button class="right-aligned button" onClick={this.handleExportTestsClick}>Export Tests</button>)}
                </div>
                <link rel="stylesheet" href={Chrome.runtime.getURL("/styles/popup.css")}/>
            </div>
        );
    }
}

export default App;
