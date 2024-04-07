import { Modal } from 'flowbite-react';
import { useState } from 'react';
import { Button } from 'src/app/components/button/button';
import { Input } from 'src/app/components/input/input';
import { Loading } from 'src/app/components/loading/loading';
import { useCreateChannelMutation } from 'src/graphql-request';
import { toast } from 'react-toastify';

export function ModalCreateChannel({
  onClose,
  show,
  workspaceId,
}: ModalCreateChannelProps) {
  const [channelName, setChannelName] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [createChannel, { loading }] = useCreateChannelMutation();

  return (
    <>
      <Modal show={show} onClose={onClose} dismissible>
        <Modal.Header>
          <span className="font-semibold">Créer un canal</span>
        </Modal.Header>
        <div className="p-4 md:p-5 space-y-4">
          <Input
            value={channelName}
            label="Nom :"
            placeholder="# ticket"
            onChange={(e) => setChannelName(e.currentTarget.value)}
          />
          {errorMessage && <p className="text-danger-500">{errorMessage}</p>}
          <div className="flex justify-end">
            <Button
              onClick={async () => {
                if (channelName.length == 0) return;
                try {
                  const response = await createChannel({
                    variables: { name: channelName, workspaceId },
                  });
                  toast.success(
                    `Canal "${response.data?.createChannel.name}" creé avec succès`,
                  );
                  onClose();
                } catch (error) {
                  setErrorMessage('Canal déjà existant');
                }
              }}
              disabled={channelName.length == 0}
            >
              Suivant
            </Button>
          </div>
        </div>
      </Modal>
      {loading && <Loading />}
    </>
  );
}

type ModalCreateChannelProps = {
  workspaceId: number;
  show: boolean;
  onClose: () => void;
};
