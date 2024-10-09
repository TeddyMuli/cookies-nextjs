"use client";

export default function Home() {
  async function setCookie() {
    await fetch('http://localhost:8000/set-cookie',
      { 
        method: 'POST',
        credentials: 'include'
      })
        .then(response => response.text())
        .then(data => alert(data));
  }

  return (
    <div>
      <button
        id="setCookieButton"
        onClick={setCookie}
      >
        Set HTTP-Only Cookie
      </button>
    </div>
  )
}
