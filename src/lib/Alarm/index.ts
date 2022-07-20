import Alarm, {AlarmScheduleType} from 'react-native-alarm-manager';

// {
//     alarm_id: 3,
//     alarm_time: '17:10:00', // HH:mm:ss
//     alarm_title: 'title modify',
//     alarm_text: 'text modify',
//     alarm_sound: 'alarm', // alarm.mp3
//     alarm_icon: 'icon', // icon2.png
//     alarm_sound_loop: false,
//     alarm_vibration: true,
//     alarm_noti_removable: false,
//     alarm_activate: true, // value for alarm toggle
//   };

interface MyAlarm {
  config: {
    sound: string;
    icon: string;
    alarm_sound_loop: boolean;
    alarm_vibration: boolean;
    alarm_noti_removable: boolean;
    alarm_activate: boolean;
  };
  alarmDetails: {
    alarm_time: string;
    alarm_title: string;
    alarm_text: string;
  };
}

class MyAlarm {
  constructor(config: MyAlarm['config']) {
    this.config = config;
  }
  set(alarmDetails: MyAlarm['alarmDetails']) {
    Alarm.schedule(
      {
        alarm_activate: this.config.alarm_activate,
        alarm_icon: this.config.icon,
        alarm_noti_removable: this.config.alarm_noti_removable,
        alarm_sound: this.config.sound,
        alarm_sound_loop: this.config.alarm_sound_loop,
        alarm_title: alarmDetails.alarm_title,
        alarm_text: alarmDetails.alarm_text,
        alarm_time: alarmDetails.alarm_time,
        alarm_vibration: this.config.alarm_vibration,
      },
      success => {
        console.log(success);
      },
      fail => {
        console.log(fail);
      },
    );
  }
}

const defaultConfig: MyAlarm['config'] = {
  alarm_activate: true,
  alarm_noti_removable: false,
  alarm_sound_loop: true,
  alarm_vibration: false,
  icon: 'icon', //icon.png
  sound: 'alarm', //alarm.mp3
};

export default new MyAlarm(defaultConfig);
