export type OrderStatus = "open" | "closed" | "processing";

export interface IFetchAllTickets {
  id: string;
  title: string;
  status: OrderStatus | "all";
  description: string;
  created_at: string;
  updated_at: string;
}

export const database = {
  users: [
    {
      id: "1",
      name: "Adalberto",
      ticketsId: [1, 2],
    },
    {
      id: "2",
      name: "Braxton",
      ticketsId: [3],
    },
    {
      id: "3",
      name: "Jordan",
      ticketsId: [4, 5],
    },
    {
      id: "4",
      name: "Tomas",
      ticketsId: [6, 7, 8],
    },
    {
      id: "5",
      name: "Emilie",
      ticketsId: [],
    },
  ],
  tickets: [
    {
      id: "1",
      title: "Dynamic Accounts Director",
      status: "open",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738851065",
      updated_at: "1738851065",
    },
    {
      id: "2",
      title: "Senior Configuration Engineer",
      status: "open",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738851065",
      updated_at: "1738851065",
    },
    {
      id: "3",
      title: "National Group Architect",
      status: "processing",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738779155",
      updated_at: "1738779155",
    },
    {
      id: "4",
      title: "Future Security Analyst",
      status: "processing",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738599155",
      updated_at: "1738599155",
    },
    {
      id: "5",
      title: "Corporate Accounts Assistant",
      status: "closed",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738771955",
      updated_at: "1738599155",
    },
    {
      id: "6",
      title: "Legacy Paradigm Technician",
      status: "open",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738599155",
      updated_at: "1738599155",
    },
    {
      id: "7",
      title: "Future Identity Administrator",
      status: "closed",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738599155",
      updated_at: "1738599155",
    },
    {
      id: "8",
      title: "Product Configuration Specialist",
      status: "closed",
      description:
        "Nihil cum voluptatum ullam. Fugit voluptatibus natus quia quidem et ut suscipit non occaecati. Eum nemo eveniet neque eum suscipit omnis aut magnam.",
      created_at: "1738599155",
      updated_at: "1738599155",
    },
  ],
  comments: [
    {
      id: "1",
      text: "Harum reprehenderit quo eveniet.",
      ticketsId: "1",
      created_at: "1738851065",
    },
    {
      id: "2",
      text: "Doloribus similique eos. At ad sint. ",
      ticketsId: "1",
      created_at: "1738851065",
    },
    {
      id: "3",
      text: "Quis rerum reprehenderit facilis commodi consequatur exercitationem quasi tempore.",
      ticketsId: "1",
      created_at: "1738851065",
    },
    {
      id: "4",
      text: "Dolorem et repellendus voluptas placeat qui qui totam eum.",
      ticketsId: "4",
      created_at: "1738851065",
    },
    {
      id: "5",
      text: "Dignissimos molestias est ullam.",
      ticketsId: "4",
      created_at: "1738851065",
    },
  ],
};
