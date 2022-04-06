export const url = {
  '/follow-ups': 'Follow Up',
  '/follow-ups/1': '000012455588444A',
  '/containers': 'Containers no pátio',
  '/finalizados': 'Finalizados',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

export const title = {
  '/follow-ups': 'Importação',
  '/follow-ups/1': 'Importação',
  '/containers': 'Resumo de Fornecedores',
  '/containers/1': 'Resumo de Fornecedores',
  '/finalizados': 'Finalizados',
  '/spam': 'Spam',
  '/drafts': 'Drafts',
};

export function dateActual() {
  const today = new Date();

  const dateFormatted = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(today);

  return dateFormatted.replaceAll(' de ', ' ').toUpperCase();
}

export function timeActual() {
  const moment = new Date();

  // hours in format am/pm
  var hour = moment.getHours();
  hour = ((hour + 11) % 12 + 1);  
  var suffix = hour <= 12 ? "PM":"AM";
  hour = insertZero(hour);

  var min = moment.getMinutes();    
  min = insertZero(min);  

  var sec = moment.getSeconds();        
  sec = insertZero(sec);  
  return hour + ":" + min + ":" + sec + " " + suffix;

  //return {hour, min, sec, suffix};
}

function insertZero(number){
  if(number < 10) {
    return "0" + number;
  }

  return number;
}