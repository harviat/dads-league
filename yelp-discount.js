var reURL = new RegExp("^https?:\/\/(www.)?yelp.com\/", "i");

if (document.referrer.length && reURL.test(document.referrer)) {
      window.onload = function prefill_coupon() {
document.getElementById("id123-couponcode").value = "10OFF-900";
}
} else {
    alert();
}
