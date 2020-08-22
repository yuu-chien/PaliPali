export default function (num) {
  const price = num.toString().split('.');
  price[0] = price[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return `$${price.join('.')}`;
}
