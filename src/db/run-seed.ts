import seed from "./seed";

seed()
  .then(() => {
    console.log("🌱 Seed successful 🌱");
    process.exit(0);
  })
  .catch((e) => {
    console.log("🌱 Seed failed ❌");
    console.error(e);
    process.exit(1);
  });
