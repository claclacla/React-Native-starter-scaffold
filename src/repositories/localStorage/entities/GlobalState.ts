import { LocalStorageAuthentication } from './LocalStorageAuthentication';
import { LocalStorageCarriers } from './LocalStorageCarriers';
import { LocalStorageChannelCategories } from './LocalStorageChannelCategories';
import { LocalStorageSites } from './LocalStorageSites';
import { LocalStorageDiagnosiEnergetica } from './LocalStorageDiagnosiEnergetica';
import { LocalStorageMainPage } from './LocalStorageMainPage';

export interface GlobalState {
    authentication: LocalStorageAuthentication,
    sites: LocalStorageSites,
    carriers: LocalStorageCarriers,
    channelCategories: LocalStorageChannelCategories,
    diagnosiEnergetica: LocalStorageDiagnosiEnergetica,
    MainPage: LocalStorageMainPage
} 