import { PropsWithChildren } from 'react';
import { useChannels } from './use-channels';
import { DEFAULT_CHANNEL } from './channel.helper';
import { ROUTES } from '../routes';
import { Navigate } from 'react-router-dom';

export function RedirectToRandom({}: RedirectToRandomProps) {
  const { channels } = useChannels();
  const random = channels.find((ch) => ch.name == DEFAULT_CHANNEL);

  if (random) {
    return <Navigate to={ROUTES.channel(random.id)} />;
  }
  return <>Aucun canal aléatoire</>;
}

type RedirectToRandomProps = PropsWithChildren<{}>;
