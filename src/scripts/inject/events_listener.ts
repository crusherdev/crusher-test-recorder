import RecordingOverlay from "./ui/recordingOverlay";
import {ACTION_TYPES} from "../../constants/ActionTypes";
import LocalFrameStorage from "../../utils/localFrameStorage";
import {IS_RECORDING_USING_INSPECTOR, IS_RECORDING_WITHOUT_INSPECTOR, NOT_RECORDING} from "../../constants";

if (top !== self) {
    document.body.innerHTML += `<link rel="stylesheet" href="${chrome.runtime.getURL('styles/overlay.css')}"/>
<div id="overlay_add_action" data-recorder="true">
  <div id="popper_arrow" data-popper-arrow="true"></div>
  <div class="arrow_box" id="overlay_add_icon" data-recorder="true"><span id="overlay_add" data-recorder="true">+</span>
    <div id="overlay_add_events_container" data-recorder="true">
      <div class="overlay_heading_container" data-recorder="true"><span class="overlay_heading" data-recorder="true">Select action</span>
        <div class="overlay_close_icon" data-recorder="true">
          <svg width="22" height="22" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" data-recorder="true">
            <path data-recorder="true" d="M1.82603 1.9512C-0.283608 4.12983 -0.227482 7.61874 1.95114 9.72837C4.12976 11.838 7.61867 11.7819 9.72831 9.60326C11.8379 7.42464 11.7818 3.93573 9.6032 1.82609C7.42458 -0.283543 3.93566 -0.227417 1.82603 1.9512ZM8.17365 3.63183C8.26465 3.71995 8.26698 3.86489 8.17886 3.95589L6.42527 5.76682L8.2362 7.52041C8.3272 7.60853 8.32954 7.75347 8.24142 7.84447L7.92259 8.17373C7.83447 8.26473 7.68953 8.26706 7.59853 8.17894L5.78758 6.42534L4.03399 8.23627C3.94587 8.32727 3.80093 8.3296 3.70993 8.24148L3.38067 7.92265C3.28967 7.83453 3.28734 7.68959 3.37546 7.59859L5.12905 5.78766L3.31812 4.03407C3.22712 3.94595 3.22479 3.80101 3.3129 3.71001L3.63173 3.38075C3.71985 3.28975 3.86479 3.28742 3.95579 3.37554L5.76673 5.12913L7.52032 3.3182C7.60844 3.2272 7.75338 3.22487 7.84438 3.31298L8.17365 3.63183Z" fill="white"></path>
          </svg>
        </div>
      </div>
      <div class="overlay_modal_content" data-recorder="true">
        <div class="overlay_grid" id="events_grid" data-recorder="true">
          <div class="overlay_add_event_item" data-action="HOVER" data-recorder="true">Hover</div>
          <div class="overlay_add_event_item" data-action="CLICK" data-recorder="true">Click</div>
          <div class="overlay_add_event_item" data-action="SCROLL_TO_VIEW" data-recorder="true">Scroll to view</div>
          <div class="overlay_add_event_item" data-action="EXTRACT_INFO" data-recorder="true">Extract Info</div>
          <div class="overlay_add_event_item" data-action="ASSERT_TEXT" data-recorder="true">Assert Text</div>
          <div class="overlay_add_event_item" data-action="SCREENSHOT" data-recorder="true">Screenshot</div>
        </div>
        <div class="form_container" id="extract_event_form" data-recorder="true" data-gone="true">
          <input class="modal_input" id="extract_variable_name" placeholder="Name of variable" data-recorder="true" />
          <textArea class="form_textarea" id="validation_script" data-recorder="true"></textArea>
          <div class="form_label label" data-recorder="true">Extracted Info</div>
          <textArea class="form_textarea" id="extracted_info_preview" placeholder="" disabled="true" data-recorder="true"></textArea>
          <div class="form_submit_btn" id="submit_extract_form" data-recorder="true">Save</div>
        </div>
        <div class="form_container" id="assert_event_form" data-recorder="true" data-gone="true">
          <div class="form_label label" data-recorder="true">Should Equal to</div>
          <div class="form_label">
            <select id="options" name="options">
              <option value="equal">Equal</option>
              <option value="notEqual">Not Equal</option>
              <option value="isAtMost">isAtMost</option>
              <option value="isNull">isNull</option>
              <option value="isNotNull">isNotNull</option>
              <option value="isNan">isNan</option>
              <option value="isNotNaN">isNotNaN</option>
              <option value="isArray">isArray</option>
              <option value="isFinite">isFinite</option>
              <option value="include">include</option>
              <option value="include">include</option>
              <option value="match">match</option>
              <option value="notMatch">notMatch</option>
              <option value="lengthOf">lengthOf</option>
              <option value="oneOf">oneOf</option>
              <option value="isEmpty">isEmpty</option>
              <option value="isNotEmpty">isNotEmpty</option>
              <option value="isOk">isOk</option>
              <option value="array">array</option>
            </select>
          </div>
          <input class="modal_input" id="assert_comparision_text" placeholder="" data-recorder="true" />
          <div class="form_label label" data-recorder="true">Validation</div>
          <input class="modal_input" id="assert_validation" placeholder="Validation" disabled="true" data-recorder="true" />
          <div class="form_submit_btn" id="submit_assert_form" data-recorder="true">Save</div>
        </div>
      </div>
    </div>
  </div>
</div>
`;
    const recordingOverlay = new RecordingOverlay({});

    window.top.postMessage(
        {
            type: ACTION_TYPES.CHECK_RECORDING_STATUS,
            //@ts-ignore
            frameId: LocalFrameStorage.get(),
            value: true
        },
        '*'
    );

    window.addEventListener('message', (message)=>{
        const {type, value} = message.data;
        console.log(message.data);
        if(!!type === false){
            return;
        }

        switch(type){
            case ACTION_TYPES.INSPECT:
                if(value)
                    recordingOverlay.showEventsFormWizard();
                else
                    recordingOverlay.removeEventsFormWizard();
                break;
            case ACTION_TYPES.SCREENSHOT:
                recordingOverlay.takePageScreenShot();
                break;
            case ACTION_TYPES.CAPTURE_CONSOLE:
                recordingOverlay.saveConsoleLogsAtThisMoment();
                break;
            case ACTION_TYPES.GO_BACK:
                window.history.back();
                break;
            case ACTION_TYPES.GO_FORWARD:
                window.history.forward();
                break;
            case ACTION_TYPES.REFRESH_PAGE:
                window.location.reload();
                break;
            case ACTION_TYPES.CHECK_RECORDING_STATUS:
                if(value === IS_RECORDING_WITHOUT_INSPECTOR || value === NOT_RECORDING){
                    recordingOverlay.startEventRecording(true);
                } else if(value === IS_RECORDING_USING_INSPECTOR){
                    recordingOverlay.startEventRecording();
                    recordingOverlay.showEventsFormWizard();
                }
                break;
        }
    }, false);

    document.addEventListener("keydown", function(event: KeyboardEvent){
        if(event.keyCode === 68 && event.shiftKey){
            recordingOverlay.showEventsFormWizard();
        }
    }, true);
}