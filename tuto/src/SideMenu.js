import TagButton from "./TagButton";

export default function SideMenu() {
  const listButton = [
    {
      key: 1,
      title: "مقالات حصرية",
      icons: "🧙🧙🧙",
      child: (
        <>
          <img
            src="https://iep.utm.edu/wp-content/media/Machiavelli.jpg"
            alt="فارغ"
          />
        </>
      ),
    },
    {
      key: 2,
      title: "مقالات مميزة",
      icons: "💩💩💩💩",
      child: (
        <>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg/250px-Official_Presidential_Portrait_of_President_Donald_J._Trump_%282025%29.jpg"
            alt="فارغ"
          />
        </>
      ),
    },
    {
      key: 3,
      title: "الترند",
      icons: "🏦💸🤑💰💲",
      child: (
        <>
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQGlPwNMxMx-0A/profile-displayphoto-shrink_800_800/B4EZZy2HHtHMAc-/0/1745683510854?e=1755129600&v=beta&t=oAqMgwliDLTmkLsc0XoQGRQqpflGsh_G_TH12rUf-WI"
            alt="فارغ"
          />
        </>
      ),
    },
  ];

  const listButtonMapped = listButton.map((button) => {
    return (
      <TagButton title={button.title} icons={button.icons} key={button.key}>
        {" "}
        {button.child}{" "}
      </TagButton>
    );
  });

  return (
    <div
      style={{
        border: "solid teal 5px",
        margin: "25px",
        padding: "10px",
      }}
    >
      {listButtonMapped}
    </div>
  );
}
