export const ThemeMode = [
  {
    "id": "1",
    "color": "Dark"
  },
  {
    "id": "2",
    "color": "White"
  },
];

export const EmailTypes = [
  {
    "id": "1",
    "item": "Name",
    "value": "name"
  },
  {
    "id": "2",
    "item": "Company's name",
    "value": "companyName"
  },
  {
    "id": "3",
    "item": "Numbers of employee",
    "value": "employeeNum"
  },
  {
    "id": "4",
    "item": "Position in the Company",
    "value": "position"
  },
  {
    "id": "5",
    "item": "Phone Number",
    "value": "phoneNum"
  },
  {
    "id": "6",
    "item": "Email",
    "value": "email"
  }
]

export const EmailItemCheck = {
  name: true,
  companyName: true,
  employeeNum: true,
  position: true,
  phoneNum: true,
  email: true
}

export const TalkAboutData = {
  title: "What we can talk about",
  emailList: [
    {
      id: "1",
      content: "Talk about your company’s goals and find out how our firm services can help boost your business",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    },
    {
      id: "2",
      content: "Give you an expert and actionable insight and current trends in relation to your business and industry",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    },
    {
      id: "3",
      content: "Talk about how our firm has transformed businesses in your industry.",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    }
  ]
}

export const ProfileData = {
  isOpen: false,
  info: {
    company: "OnTheGo Accountants",
    department: "Tech & Growth",
    location: "Birmingham",
    address: "The Colmore Building 20 Colmore Circus Queensway Birmingham, B4 6AT",
    officeNum: "03330 067 123"
  }
}

export const QoutesData = {
  title: "Qoutes from Clients About me",
  isOpen: false,
  list: [
    {
      id: "1",
      content: "<p>This is by far the best accounting service that I've ever used. A unique combination of quality, affordability and kindness. Virtually, this is the best experience you can have with any accounting firm. For our company (Eventera Ltd),<span style='background: #CFF2EE;color: #15202B'>they went above and beyond, having multiple calls explaining the whole system and providing high-quality advice when needed. Kudos for doing such a fantastic job!</span></p>",
      name: "Petros Topouzis: eventera.io",
    },
    {
      id: "2",
      content: "I am very much satisfied with service provided by OnTheGo Accountants. Whenever I raise request or any query, I will get the information immediately.<span style='background: #CFF2EE;color: #15202B'>Personally, I say thanks to Omar for his service. I will recommend OnTheGo accounts to other colleagues.</span>",
      name: "Viswa",
    },
  ]
}

export const QoutesDemoData = {
  id: "1",
  content: "This is by far the best accounting service that I've ever used. A unique combination of quality, affordability and kindness. Virtually, this is the best experience you can have with any accounting firm. For our company (Eventera Ltd),<span style='background: #CFF2EE;color: #15202B'>they went above and beyond, having multiple calls explaining the whole system and providing high-quality advice when needed. Kudos for doing such a fantastic job!</span>",
  name: "Petros Topouzis: eventera.io",
}