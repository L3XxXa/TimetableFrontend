import React from 'react';
import "./Settings.css"
import SettingsForm from "../../components/forms/settings_form/SettingsForm";
const Settings = () => {
  return (
    <div className="SettingsPage">
        <h1 className="w1">Настройки</h1>
      <SettingsForm classname="settings__form"/>

    </div>

  );
};

export default Settings;