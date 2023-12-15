const days_opt = document.getElementById("days");
const hours_opt = document.getElementById("hours");
const minutes_opt = document.getElementById("minutes");
const seconds_opt = document.getElementById("seconds");

const lanch_date = new Date(2024, 2, 0, 0, 0, 0);

let getdate = () => {
  const current_date = new Date();

  let final_date = lanch_date - current_date;

  if (final_date < 0) {
    clearInterval(getdate);
    [
      days_opt.textContent,
      hours_opt.textContent,
      minutes_opt.textContent,
      seconds_opt.textContent,
    ] = ["00", "00", "00", "00"];
  }
  let days = Math.floor(final_date / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (final_date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((final_date % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((final_date % (1000 * 60)) / 1000);

  let day = days < 10 ? `0${days}` : days;
  let hour = hours < 10 ? `0${hours}` : hours;
  let minute = minutes < 10 ? `0${minutes}` : minutes;
  let second = seconds < 10 ? `0${seconds}` : seconds;

  days_opt.textContent = day;
  hours_opt.textContent = hour;
  minutes_opt.textContent = minute;
  seconds_opt.textContent = second;
};

getdate();

const timer = setInterval(() => {
  getdate();
}, 1000);

let timeline = gsap.timeline();

timeline.from(".logo", {
  x: -300,
  duration: 0.3,
  rotation: 720,
  delay: 0.5,
  stagger: 0.1,
});

timeline.from(".content h1 ,.content span", {
  y: -100,
  duration: 0.4,
  opacity: 0,
  stagger: 0.1,
});

timeline.from(".timer_box div small", { y: 10, opacity: 0 });

timeline.from(".content #submit_btn", {
  x: -10,
  opacity: 0,
  scale: 0.8,
  yoyo:true,
  repeat:-1,
  duration: 0.5,
});
