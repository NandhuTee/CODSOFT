function goBack() {
  window.history.back();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("MyPortfolio").addEventListener("click", function() {
    window.location.href = "https://superb-banoffee-b0aae8.netlify.app/";
  });

  document.getElementById("WeatherApp").addEventListener("click", function() {
    window.location.href = "https://weatherappnandhu.netlify.app/";
  });

  document.getElementById("TicTacToe").addEventListener("click", function() {
    window.location.href = "https://celadon-biscochitos-6415f5.netlify.app/";
  });
});
