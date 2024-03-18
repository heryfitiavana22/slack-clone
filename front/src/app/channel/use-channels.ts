import { Channel } from 'src/graphql-request';
import { create } from 'zustand';

type ChannelsStore = {
  channels: Channel[];
  setChannels: (channels: Channel[]) => void;
};

export const useChannels = create<ChannelsStore>((set) => ({
  channels: [],
  setChannels(channels) {
    set({ channels });
  },
}));
