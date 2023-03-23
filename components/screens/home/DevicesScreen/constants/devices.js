const DEVICES = [
  {
    id: "transmitter",
    image: "images/home/transmitter.png",
    label: "Guide Transmitter",
    labelTranslate: "Предајник водича",
    variants: [
      {
        id: "transmitter_default",
        label: "Default model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "transmitter_default_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "transmitter_default_channels",
            value: "Number of channels: 40",
            valueTranslate: "Број канала: 40",
          },
          {
            id: "transmitter_default_blocker",
            value: "Channel blocker",
            valueTranslate: "Блокатор канала",
          },
          {
            id: "transmitter_default_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "transmitter_default_distance",
            value: "Distance: 100m",
            valueTranslate: "Удаљеност: 100m",
          },
          {
            id: "transmitter_default_weight",
            value: "Weight: 110g",
            valueTranslate: "Тежина: 110g",
          },
        ],
      },
      {
        id: "transmitter_dark",
        label: "Dark model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "transmitter_dark_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "transmitter_dark_channels",
            value: "Number of channels: 50",
            valueTranslate: "Број канала: 50",
          },
          {
            id: "transmitter_dark_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "transmitter_dark_distance",
            value: "Distance: 200m",
            valueTranslate: "Удаљеност: 200m",
          },
          {
            id: "transmitter_dark_weight",
            value: "Weight: 120g",
            valueTranslate: "Тежина: 120g",
          },
        ],
      },
    ],
  },
  {
    id: "receiver",
    image: "images/home/receiver.png",
    label: "User Receiver",
    labelTranslate: "Усер Рецеивер",
    variants: [
      {
        id: "receiver_default",
        label: "Default model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "receiver_default_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "receiver_default_channels",
            value: "Number of channels: 40",
            valueTranslate: "Број канала: 40",
          },
          {
            id: "receiver_default_blocker",
            value: "Channel blocker",
            valueTranslate: "Блокатор канала",
          },
          {
            id: "receiver_default_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "receiver_default_distance",
            value: "Distance: 100m",
            valueTranslate: "Удаљеност: 100m",
          },
          {
            id: "receiver_default_weight",
            value: "Weight: 110g",
            valueTranslate: "Тежина: 110g",
          },
        ],
      },
    ],
  },
  {
    id: "headphones",
    image: "images/home/headphones.png",
    label: "Headphones",
    labelTranslate: "Слушалице",
    variants: [
      {
        id: "headphones_default",
        label: "Default model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "headphones_default_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "headphones_default_channels",
            value: "Number of channels: 40",
            valueTranslate: "Број канала: 40",
          },
          {
            id: "headphones_default_blocker",
            value: "Channel blocker",
            valueTranslate: "Блокатор канала",
          },
          {
            id: "headphones_default_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "headphones_default_distance",
            value: "Distance: 100m",
            valueTranslate: "Удаљеност: 100m",
          },
          {
            id: "headphones_default_weight",
            value: "Weight: 110g",
            valueTranslate: "Тежина: 110g",
          },
        ],
      },
      {
        id: "headphones_dark",
        label: "Dark model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "headphones_dark_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "headphones_dark_channels",
            value: "Number of channels: 50",
            valueTranslate: "Број канала: 50",
          },
          {
            id: "headphones_dark_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "headphones_dark_distance",
            value: "Distance: 200m",
            valueTranslate: "Удаљеност: 200m",
          },
          {
            id: "headphones_dark_weight",
            value: "Weight: 120g",
            valueTranslate: "Тежина: 120g",
          },
        ],
      },
    ],
  },
  {
    id: "microphones",
    image: "images/home/microphones.png",
    label: "Microphones",
    labelTranslate: "Микрофони",
    variants: [
      {
        id: "microphones_default",
        label: "Default model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "microphones_default_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "microphones_default_channels",
            value: "Number of channels: 40",
            valueTranslate: "Број канала: 40",
          },
          {
            id: "microphones_default_blocker",
            value: "Channel blocker",
            valueTranslate: "Блокатор канала",
          },
          {
            id: "microphones_default_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "microphones_default_distance",
            value: "Distance: 100m",
            valueTranslate: "Удаљеност: 100m",
          },
          {
            id: "microphones_default_weight",
            value: "Weight: 110g",
            valueTranslate: "Тежина: 110g",
          },
        ],
      },
      {
        id: "microphones_dark",
        label: "Dark model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "microphones_dark_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "microphones_dark_channels",
            value: "Number of channels: 50",
            valueTranslate: "Број канала: 50",
          },
          {
            id: "microphones_dark_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "microphones_dark_distance",
            value: "Distance: 200m",
            valueTranslate: "Удаљеност: 200m",
          },
          {
            id: "microphones_dark_weight",
            value: "Weight: 120g",
            valueTranslate: "Тежина: 120g",
          },
        ],
      },
    ],
  },
  {
    id: "case",
    image: "images/home/case.png",
    label: "Equipment Case",
    labelTranslate: "Кућиште за опрему",
    variants: [
      {
        id: "case_default",
        label: "Default model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "case_default_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "case_default_channels",
            value: "Number of channels: 40",
            valueTranslate: "Број канала: 40",
          },
          {
            id: "case_default_blocker",
            value: "Channel blocker",
            valueTranslate: "Блокатор канала",
          },
          {
            id: "case_default_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "case_default_distance",
            value: "Distance: 100m",
            valueTranslate: "Удаљеност: 100m",
          },
          {
            id: "case_default_weight",
            value: "Weight: 110g",
            valueTranslate: "Тежина: 110g",
          },
        ],
      },
      {
        id: "case_dark",
        label: "Dark model",
        description:
          "A user receiver is an electronic device that receives signals from a transmitter and converts them into a usable signal. User receivers are used in a wide range of applications, from wireless communication systems to entertainment systems. In wireless communication systems, user receivers are used to pick up the signal transmitted by the base station and convert it into a signal that can be used by the user's device. In entertainment systems, user receivers are used to pick up the signal transmitted by the transmitter and convert it into sound or video that can be played back on the user's device. User receivers come in different sizes and configurations, and are designed to work with specific types of transmitters.",
        descriptionTranslate:
          "Кориснички пријемник је електронски уређај који прима сигнале од предајника и претвара их у употребљив сигнал. Кориснички пријемници се користе у широком спектру апликација, од бежичних комуникационих система до система за забаву. У бежичним комуникационим системима, кориснички пријемници се користе да покупе сигнал који емитује базна станица и конвертују га у сигнал који може да користи уређај корисника. У системима за забаву, кориснички пријемници се користе да покупе сигнал који преноси предајник и конвертују га у звук или видео који се може репродуковати на уређају корисника. Кориснички пријемници долазе у различитим величинама и конфигурацијама и дизајнирани су за рад са одређеним типовима предајника.",
        specifications: [
          {
            id: "case_dark_frequency",
            value: "Frequency: 863-865 MHz",
            valueTranslate: "Фреквенција: 863-865 MHz",
          },
          {
            id: "case_dark_channels",
            value: "Number of channels: 50",
            valueTranslate: "Број канала: 50",
          },
          {
            id: "case_dark_powerSaver",
            value:
              "Power saver (if device is not in use for 20 min, it shuts off automatically)",
            valueTranslate:
              "Уштеда енергије (ако се уређај не користи 20 минута, аутоматски се искључује)",
          },
          {
            id: "case_dark_distance",
            value: "Distance: 200m",
            valueTranslate: "Удаљеност: 200m",
          },
          {
            id: "case_dark_weight",
            value: "Weight: 120g",
            valueTranslate: "Тежина: 120g",
          },
        ],
      },
    ],
  },
];

export { DEVICES };
