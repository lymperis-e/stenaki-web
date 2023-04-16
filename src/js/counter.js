export default function getTimeDifference(endDate) {
    const milliseconds = Date.parse(endDate) - Date.now();
  
    const seconds = Math.floor(milliseconds / 1000 % 60);
    const minutes = Math.floor(milliseconds / 1000 / 60 % 60);
    const hours = Math.floor(milliseconds / 1000 / 60 / 60 % 24);
    const days = Math.floor(milliseconds / 1000 / 60 / 60 / 24 % 30);
    const months = Math.floor(milliseconds / 1000 / 60 / 60 / 24 / 30);
  
    return { months, days, hours, minutes, seconds };
  }