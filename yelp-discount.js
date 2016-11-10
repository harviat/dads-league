var reURL = new RegExp("^https?:\/\/(www.)?https://www.yelp.com/biz_redir?cachebuster=1478738050&s=2a75cd863e1b32a0e680616bf4a2b73a0c6924be0aff8134abd042c0a2acdb9e&src_bizid=TJOi4SVyI9s2_JH_F1kqPA&url=http%3A%2F%2Fwww.wiseguysmove.com%2Frates-orderwiseguysmovers&website_link_type=cta\/", "i");

if (document.referrer.length && reURL.test(document.referrer)) {
      window.onload = function prefill_coupon() {
document.getElementById("id123-couponcode").value = "10OFF-900";
}
} else {
    alert();
}
