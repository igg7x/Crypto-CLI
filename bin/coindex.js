#!/usr/bin/env node

import { program } from "commander";
import figlet from "figlet";
const msn = (msn) => {
  console.log(
    figlet.textSync(msn, {
      font: "ANSI Shadow",
      horizontalLayout: "default",
      verticalLayout: "default",
      width: 80,
      whitespaceBreak: true,
    })
  );
};
msn("Crypto-CLI");

program
  .version("1.0.0")
  // .action(msn("Crypto-CLI"))
  .command("key", "Manage API Key")
  .command("check", "Check Coin Price Info")
  .command("see", "View  all coins available and their change")
  .description("CLI for Cryptocurrency Price Checker")
  .parse(process.argv);
