import { program } from "commander";
import { see } from "../commands/command-see.js";

program
  .command("coins")
  .description("View all coins available")
  .action(see.coins);

program
  .command("exchanges")
  .description("View all exchanges available")
  .action(see.exchanges);

program.parse(process.argv);
