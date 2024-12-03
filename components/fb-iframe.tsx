'use client'

export default function FacebookIframe() {
  return (
    <div>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fithusc&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=false&appId=745475971005117"
        width="340"
        height="130"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  )
}
