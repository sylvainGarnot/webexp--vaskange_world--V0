import { id, name, mail, registration, last_connection } from './state';
import type { PlayerInterface } from './interface';
import type { SettingInterface } from '../setting/interface';
import { setSettings } from '../setting/action';


// PRIVATE
function setPlayer(input: PlayerInterface) {
  id.value = input.id as string;
  name.value = input.name as string;
  mail.value = input.mail as string;
  registration.value = input.registration as Date;
  last_connection.value = input.last_connection as Date;
}


// EXPORT
export function login() {
  // GET PLAYER
  // GET Setting
  // GET Locations found
  // GET Characters found
  // GET Items acquired
  // GET Quests accepted
  const responsePlayer = {
    id: 'test-id',
    name: 'test-name',
    mail: 'test-mail',
    registration: new Date(0),
    last_connection: new Date,
  } as PlayerInterface;
  // POST update last_connection

  const responseSetting = {
    isFullscreen: true,
    effectVolume: 0.7,
    musicVolume: 0.4,
  } as SettingInterface;

  setPlayer(responsePlayer as PlayerInterface);
  setSettings(responseSetting as SettingInterface)
};


export function logout() {
  const response = {
    id: '',
    name: '',
    mail: '',
    registration: new Date(0),
    last_connection: new Date(0),
  } as PlayerInterface;
  
  setPlayer(response as PlayerInterface);
};



// Change name
// Change mail