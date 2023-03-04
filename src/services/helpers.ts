const helpers = {

  shortenThisDate(dateString: Date): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear().toString().substr(-2);
    return `${day} ${month} '${year}`;
  },

  prettifyThisDate(
    date: Date,
    options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      year: 'numeric',
      month: "long",
      day: 'numeric',
    }): string {
    return (new Date(date)).toLocaleDateString('en-US', options);
  }
};

export default helpers;
