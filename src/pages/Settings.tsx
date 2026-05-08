import { useState } from "react";
import { TextField, Switch, FormControlLabel, Button } from "@mui/material";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [emailNotif, setEmailNotif] = useState(true);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded-xl shadow-md">

      {/* Title */}
      <h1 className="text-2xl font-bold mb-6">
        Settings ⚙️
      </h1>

      {/* Profile Section */}
      <div className="space-y-4">

        <TextField
          fullWidth
          label="Username"
          variant="outlined"
        />

        <TextField
          fullWidth
          label="Email"
          variant="outlined"
        />

      </div>

      {/* Divider */}
      <div className="my-6 border-t"></div>

      {/* Toggles */}
      <div className="space-y-3">

        <FormControlLabel
          control={
            <Switch
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
          }
          label="Dark Mode"
        />

        <FormControlLabel
          control={
            <Switch
              checked={emailNotif}
              onChange={() => setEmailNotif(!emailNotif)}
            />
          }
          label="Email Notifications"
        />

      </div>

      {/* Save Button */}
      <div className="mt-6 flex justify-end">
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
      </div>

    </div>
  );
};

export default Settings;