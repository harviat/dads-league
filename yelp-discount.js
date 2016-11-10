if (document.referrer.indexOf(‘yelp.com') != -1) {
     //user came from yelp.com
window.onload = function prefill_coupon() {
document.getElementById("id123-couponcode").value = "10OFF-900";
}
}
