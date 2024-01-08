import { program } from "commander";
import { check } from "../commands/command-check.js";
program
  .command("price")
  .option("--coin <type>", "Add specific coin", "BTC")
  .option("--cur <currency>", "Change the currency ", "USD")
  .description("Check Coin Price Info")
  .action((cmd) => {
    check.price(cmd);
  });

program.parse(process.argv);
