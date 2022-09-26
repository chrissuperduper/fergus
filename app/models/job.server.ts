type General = {
  client_name: string;
  email: string;
  mobile: string;
};

type Notes = {
  title: string;
  description: string;
};

export type Job = {
  uji: string;
  image: string;
  status: string;
  created: Date;
  general: General;
  notes: [Notes] | [];
};

export type Jobs = {
  jobs: [Job];
};

enum Status {
  SCHEDULED = "scheduled",
  ACTIVE = "active",
  INVOICING = "invoicing",
  TO_PRICED = "to priced",
  COMPLETED = "completed",
}

export async function getJobs(): Promise<Array<Job>> {
  return [
    {
      uji: "ABC123",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-2.jpg",
      status: Status.SCHEDULED,
      created: new Date("2022-08-08  22:10:00"),
      general: {
        client_name: "Alfred Wayne",
        email: "alfred@wayne.com",
        mobile: "0227676253",
      },
      notes: [],
    },
    {
      uji: "111",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-4.png",
      status: Status.ACTIVE,
      created: new Date("2022-07-07 10:30:00"),
      general: {
        client_name: "Edith Earl",
        email: "mail@edithearl.com",
        mobile: "022232923",
      },
      notes: [],
    },
    {
      uji: "CJ9090",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/articles/wordpress/image-3.jpg",
      status: Status.COMPLETED,
      created: new Date("2022-06-06 14:20:00"),
      general: {
        client_name: "Walter Johnson",
        email: "walter@ghbuilders.co.nz",
        mobile: "0213808087",
      },
      notes: [],
    },
    {
      uji: "8765",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-1.png",
      status: Status.TO_PRICED,
      created: new Date("2022-02-02 16:40:00"),
      general: {
        client_name: "Ted Williams",
        email: "chase239@gmail.com",
        mobile: "0221223212",
      },
      notes: [],
    },
    {
      uji: "09292jjd",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/conference-speaker.jpg",
      status: Status.SCHEDULED,
      created: new Date("2022-02-01 11:10:00"),
      general: {
        client_name: "Scottie Pippen",
        email: "scottie@pippen.com",
        mobile: "0227676253",
      },
      notes: [],
    },
    {
      uji: "00001",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png",
      status: Status.ACTIVE,
      created: new Date("2022-01-03 9:30:00"),
      general: {
        client_name: "Ada Lovelace",
        email: "ada@ada.io",
        mobile: "022292923",
      },
      notes: [],
    },
    {
      uji: "32lj22",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-1.png",
      status: Status.COMPLETED,
      created: new Date("2022-07-01 4:20:00"),
      general: {
        client_name: "Global Inc",
        email: "inc@global.co.nz",
        mobile: "0213823087",
      },
      notes: [],
    },
    {
      uji: "782865",
      image:
        "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-content-2.png",
      status: Status.TO_PRICED,
      created: new Date("2022-05-01 16:10:00"),
      general: {
        client_name: "John Stockton",
        email: "johnny_s@gmail.com",
        mobile: "02212898212",
      },
      notes: [],
    },
  ];
}

export async function getJob(id: string): Promise<Job | undefined> {
  const jobs = await getJobs();
  return jobs.find((job) => id === job.uji);
}
