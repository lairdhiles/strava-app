{\rtf1\ansi\ansicpg1252\cocoartf2709
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 import React, \{ useState \} from 'react';\
import \{ Auth \} from 'aws-amplify';\
\
function App() \{\
  const [user, setUser] = useState(null);\
\
  async function signIn() \{\
    const user = await Auth.signIn('username', 'password');\
    setUser(user);\
  \}\
\
  return (\
    <div>\
      <h1>Running Planner</h1>\
      \{user ? <p>Welcome, \{user.username\}</p> : <button onClick=\{signIn\}>Sign In</button>\}\
    </div>\
  );\
\}\
\
export default App;\
}