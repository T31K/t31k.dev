function addWindow (index) {
  return `<div class="blog-window" id="${index}">
            <div class="top-menu">
              <div>
                <span class="red"></span>
                <span class="orange"></span>
                <span class="green"></span>
              </div>
              <div>
                <span class="date">2017 January 30th</span>
              </div>
            </div>
            <div class="inner">
              <h4>>_ </h4>
              <h3 class="data-title">4 Tips To Improve Productivity</h3>
              <h5 class="description">Hello world, my name is Tim</h5>
              <a class="link" href="hello" target="_blank">Read More</a>

            </div>
            <div class="tags">

              <div>

                <span id="tag_${index}0">⚛️</span>
                <span id="tag_${index}1">💻</span>
                <span id="tag_${index}2">🧘🏻‍♂️</span>
                <span id="tag_${index}3">🖥</span>
                <span id="tag_${index}4">🎮</span>
              </div>
            </div>
          </div>
  `
}

function truncateBefore (str, pattern) {
  let result = str.slice(str.indexOf(pattern) + pattern.length);
  let output = ""
  for (let i = 0; i < result.length; i++) {
    output += result[i]
    if (result[i+1] === "<" && result[i+2] === "/") {
      break
    }
  }
  return output
}

function emojiUnicode (emoji) {
  let hex = emoji.codePointAt(0).toString(16)
  let emo = String.fromCodePoint("0x"+hex);
  return emo
};

function changeTags(tag) {
  switch (tag) {
    case "productivity"             : return emojiUnicode("🚀")
    case "startup"                  : return emojiUnicode("💸")
    case "entrepreneurship"         : return emojiUnicode("🤑")
    case "writing"                  : return emojiUnicode("✍🏻")
    case "health"                   : return emojiUnicode("🏥")
    case "life"                     : return emojiUnicode("🙏🏻")
    case "life-lessons"             : return emojiUnicode("🎓")
    case "programming"              : return emojiUnicode("💻")
    case "javascript"               : return emojiUnicode("🧩")
    case "technology"               : return emojiUnicode("📱")
    case "coding"                   : return emojiUnicode("🖥")
    case "software-development"     : return emojiUnicode("📡")
    case "self-improvement"         : return emojiUnicode("🧘🏻‍♂️")
    case "careers"                  : return emojiUnicode("📈")
    case "league-of-legends"        : return emojiUnicode("🎮")
    case "self-taught"              : return emojiUnicode("💡")
  }
}

const url = " https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40T31K%2F"


var data = {rss: "https://medium.com/feed/@T31K"}
$.get(url, data, function(response){
//Checking Response Status
if (response.status == 'ok') {

  let res = response.items

  res.map((items, index) => {
    // Duplicate Windows
    $("section.blog .container").append(addWindow(index))

    // Clean up & Append Date
    let {pubDate}= items
    let date = $.format.date(pubDate, "dd MMM yyyy")
    $(`#${index} .date`).text(date)

    // Clean up & Append Title
    let {title} = items
    $(`#${index} .data-title`).text(title)

    // Clean up & Append Description
    let {description} = items
    let final_description = truncateBefore(description, "\"medium-feed-snippet\">").replace("&amp;", "&")
    $(`#${index} .description`).text(final_description)

    // Clean up & Append Categories
    let {categories} = items
    for (let i = 0; i < 5; i++) {
      let final_categories = changeTags(categories[i])
      $(`#tag_${index}${i}`).text(final_categories)
    }

    // Clean up & Append Link
    let {link} = items
    $(`#${index} .link`).attr('href', link)
  })
  }
})
