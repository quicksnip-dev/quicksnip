import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

const DarkModeSwitch = () => {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="dark-mode" />
      {/* <Label htmlFor="dark-mode">"Blind me" mode</Label> */}
    </div>
  );
};

export default DarkModeSwitch;
