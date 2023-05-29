import { exec } from 'child_process';  
import { CronJob } from "cron";
import * as dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const env = process.env;
const backupPath = env.BACKUP_PATH || './';
const remotePath = env.REMOTE_PATH;
const identifyPath = env.IDENTIFY_PATH; 

async function runBackup() {
  exec(`rsync -avz --ignore-existing -e "ssh -i ${identifyPath}" ${remotePath} ${backupPath}`, (err, stdout, stderr) => {  
    if (err) {  
      console.error(err);  
      return;  
    }  
    console.log(stdout);  
  });
}

new CronJob(env.RUN_TIME, runBackup, null, true);
  
