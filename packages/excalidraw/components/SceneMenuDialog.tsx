import { actionLoadScene } from "../actions";
import type { ActionManager } from "../actions/manager";
import { t } from "../i18n";
import { Dialog } from "./Dialog";
import { FilledButton } from "./FilledButton";
import { LoadIcon } from "./icons";

type SceneMenuDialogProps = {
  actionManager: ActionManager;
  onCloseRequest: () => void;
};

export const SceneMenuDialog = ({
  actionManager,
  onCloseRequest,
}: SceneMenuDialogProps) => {
  const onLoadLocalScene = () => {
    actionManager.executeAction(actionLoadScene);
  };

  return (
    <>
      <Dialog
        title={t("sceneMenuDialog.header")}
        onCloseRequest={onCloseRequest}
      >
        <FilledButton
          icon={LoadIcon}
          label={t("sceneMenuDialog.label.loadLocal")}
          variant="outlined"
          onClick={onLoadLocalScene}
        />
      </Dialog>
    </>
  );
};
