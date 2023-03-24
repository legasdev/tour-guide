import { DEVICE_INFORMATION_TABS as TABS } from "./constants";

function DeviceInformationHeader({
  deviceId,
  selectedInformation = TABS[0].id,
  setSelectInformation,
}) {
  function handleChangeSelection(event) {
    setSelectInformation(event.target.value);
  }

  return (
    <header>
      {TABS.map(({ id, label, labelTranslate }) => {
        return (
          <label key={id}>
            <input
              type="radio"
              name={`${deviceId}-${id}`}
              value={id}
              checked={selectedInformation === id}
              onChange={handleChangeSelection}
            />
            <span>{label}</span>
            <span>{labelTranslate}</span>
          </label>
        );
      })}
    </header>
  );
}

DeviceInformationHeader.tabs = TABS;

export default DeviceInformationHeader;
