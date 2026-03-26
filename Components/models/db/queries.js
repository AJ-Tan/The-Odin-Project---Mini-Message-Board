const pool = require("./pool");
const { format } = require("date-fns");

const getAllMessage = async () => {
  const { rows } = await pool.query(
    `SELECT * FROM "Mini Message Board".user_messages`,
  );
  return rows;
};

const insertMessage = async (user, message) => {
  await pool.query(
    `INSERT INTO "Mini Message Board".user_messages ("user", text, added) VALUES ($1,$2,$3)`,
    [user, message, format(new Date(), "yyyy-MM-dd HH:mm:ss")],
  );
};

const resetData = async () => {
  const SQL = `
    TRUNCATE TABLE "Mini Message Board".user_messages;
    INSERT INTO "Mini Message Board".user_messages (text, "user", added) VALUES 
    ('Hey! Just checking in—did you manage to finish the report we talked about yesterday?', 'Amando', '2026-03-20 09:15:00'),
    ('I’m still working on it, but I should be able to send a draft later this afternoon.', 'Charles', '2026-03-20 10:42:00'),
    ('No worries, take your time. Just make sure we have something before the meeting tomorrow morning.', 'Leonardo Da Vinci Capitanomentasa', '2026-03-20 11:05:00'),
    ('Good morning everyone! Just a reminder that we have a team sync at 10 AM today.', 'Maria', '2026-03-21 08:00:00'),
    ('Thanks for the reminder, Maria. I’ll prepare the updates from my side before the meeting starts.', 'John', '2026-03-21 08:30:00'),
    ('By the way, has anyone reviewed the new UI changes? I’d love to get some feedback.', 'Samantha', '2026-03-21 13:15:00'),
    ('I took a quick look earlier—it’s much cleaner now, especially the dashboard layout.', 'Kevin', '2026-03-22 09:50:00'),
    ('That’s great to hear! I’ll finalize the design and push it to staging later today.', 'Samantha', '2026-03-22 11:20:00'),
    ('Can someone help me with the deployment steps? I’m getting an error when running the build.', 'Alex', '2026-03-23 14:10:00'),
    ('Sure, I’ll hop on a quick call with you in a bit so we can troubleshoot it together.', 'Amando', '2026-03-23 14:25:00');
  `;
  await pool.query(SQL);
};

module.exports = {
  getAllMessage,
  insertMessage,
  resetData,
};
