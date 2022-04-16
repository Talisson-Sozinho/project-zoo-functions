const { hours, species } = require('../data/zoo_data');

const arrayHours = Object.entries(hours);

const getAnimalsNamesOfDay = (weekday) => {
  const animalsOfTheDay = species.filter(({ availability }) => availability.includes(weekday));
  return animalsOfTheDay.map(({ name }) => name);
};

const getAnimalSchedule = (animalName) => {
  const { availability } = species.find(({ name }) => name === animalName);
  return availability;
};

const isClosed = (open, close) => open === 0 && close === 0;

const addDayHours = (infos) => {
  const [, dayHours] = arrayHours.find(([weekday]) => weekday === infos[0]);
  infos.push(dayHours.open);
  infos.push(dayHours.close);
};

const getExhibitionOfDay = (...infos) => {
  if (!infos[1] && !infos[2]) {
    addDayHours(infos);
  }
  const [weekday, open, close] = infos;
  return {
    officeHour: isClosed(open, close) ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: isClosed(open, close) ? 'The zoo will be closed!' : getAnimalsNamesOfDay(weekday),
  };
};

const getDaySchedule = (weekday) => {
  const obj = {};
  obj[weekday] = getExhibitionOfDay(weekday);
  return obj;
};

const getFullSchedule = () => arrayHours.reduce((acc, [weekday, { open, close }]) => {
  acc[weekday] = getExhibitionOfDay(weekday, open, close);
  return acc;
}, {});

const isAnimalOrDay = (scheduleTarget) => {
  const isAnimal = species.some(({ name }) => name === scheduleTarget);
  const isDay = arrayHours.some(([weekday]) => weekday === scheduleTarget);
  return { isAnimal, isDay };
};

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return getFullSchedule();
  if (isAnimalOrDay(scheduleTarget).isDay) return getDaySchedule(scheduleTarget);
  if (isAnimalOrDay(scheduleTarget).isAnimal) return getAnimalSchedule(scheduleTarget);
  return getFullSchedule();
}

module.exports = getSchedule;
