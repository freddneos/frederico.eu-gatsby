---
template: BlogPost
path: /elixir-journey-start
date: 2020-11-14T13:16:16.001Z
title: Elixir Journey
metaDescription: >
  My path to learning functional programming with elixir and introduction of
  this stack
thumbnail: /assets/blog.jpeg
---
Hello guys, 

Today I'll start a blog series to share my Elixir learning path experience.

In this post you will find :

* My Vision
* What is Elixir?
* Why Elixir
* My first month with Elixir

## My Vision

![](/assets/I93-Corridor.jpg "Future vision")

With the advent of 5G ,I had a vision, a kind of daydream about the future of technology. I know this may just seem like a fictional story but it really happened to me.

To summarize my vision I will ask some questions:

* What can a mobile internet up to 100x faster than the current one provide?
* Will smart devices take over the world?
* How much processing power do I need to process petabytes of information?
* How to make all this processing fault-tolerant and deliver something concise at the end of this processing volume?
* How to process all this volume of data without spending thousands of dollars on computer resources?
* Am I  prepared?

I know some of these questions have nothing to do with each other but it brought me an awareness of the future and the present that caught my attention.

Will the stack I use today be applicable to the questions above? This question scared me a lot. We as technology professionals know that in our industry everything has a very short lifespan.

Please reflect on these questions above, as this will help us with the following points. let me explain why I decided to study elixir and functional programming.

## What is Elixir ?

Based on wikipedia is it : 

```
Elixir is a functional, concurrent, general-purpose programming language
that runs on the BEAM virtual machine used to implement the Erlang programming language.
Elixir builds on top of Erlang and shares the same abstractions for building distributed,
fault-tolerant applications. 
Elixir also provides productive tooling and an extensible design. 
The latter is supported by compile-time metaprogramming with macros and polymorphism
via protocols.
```

[![](http://img.youtube.com/vi/8Ng6TfAj7Sk/0.jpg)](http://www.youtube.com/watch?v=8Ng6TfAj7Sk)

You can Find out more : 

* [https://en.wikipedia.org/wiki/Elixir_(programming_language)](https://en.wikipedia.org/wiki/Elixir_(programming_language))
* <https://elixir-lang.org/>
* [https://joyofelixir.com/toc.html](https://elixir-lang.org/)

It is a language that runs on Earlang VM and was  Created by José Valim (Brazillian guy)(Claps)

## Why Elixir

[![](http://img.youtube.com/vi/EXE7NUxBKrk/0.jpg)](http://www.youtube.com/watch?v=EXE7NUxBKrk)

Elixir was created to make the developer experience better than ruby's. Elixir is Dynamic, wich is a good thing for those who develop with Javascript.

You can check it bellow:

```elixir
iex> defmodule Math do
...>   def sum(a, b) do
...>     a + b
...>   end
...> end

iex> Math.sum(1, 2)
3
```

<https://www.monterail.com/blog/famous-companies-using-elixir>

### Powered By Earlang :

<https://www.infoq.com/presentations/resilience-beam-erlang-otp/>

```
The name Erlang, attributed to Bjarne Däcker, has been presumed by those
working on the telephony switches (for whom the language was designed) 
to be a reference to Danish mathematician and engineer Agner Krarup Erlang 
and a syllabic abbreviation of "Ericsson Language".[6][9][clarification needed] 
Erlang was designed with the aim of improving the development of telephony applications.
[citation needed] 
The initial version of Erlang was implemented in Prolog and was influenced 
by the programming language PLEX used in earlier Ericsson exchanges.
By 1988 Erlang had proven that it was suitable for prototyping telephone exchanges,
but the Prolog interpreter was far too slow. 
One group within Ericsson estimated that it would need to be 40 times faster
to be suitable for production use. In 1992, work began on the BEAM virtual machine (VM)
which compiles Erlang to C using a mix of natively compiled code and threaded 
code to strike a balance between performance and disk space.[10] 
According to Armstrong, the language went from lab product to real applications 
following the collapse of the next-generation 
AXE telephone exchange named AXE-N in 1995. As a result, Erlang was chosen for the next 
asynchronous transfer mode (ATM) exchange AXD.[6]

In 1998 Ericsson announced the AXD301 switch, containing over a million lines of Erlang and 
reported to achieve a high availability of nine "9"s.[11] 
Shortly thereafter, Ericsson Radio Systems banned the in-house use of Erlang for new products, citing a preference for non-proprietary languages.
The ban caused Armstrong and others to leave Ericsson.[12] The implementation was open-sourced at the end of the year.[6] 
Ericsson eventually lifted the ban and re-hired Armstrong in 2004.[12]

In 2006, native symmetric multiprocessing support was added to the runtime system and VM.[6]

Processes
Joe Armstrong, co-inventor of Erlang, summarized the principles of processes in his PhD thesis:[13]

Everything is a process.
Processes are strongly isolated.
Process creation and destruction is a lightweight operation.
Message passing is the only way for processes to interact.
Processes have unique names.
If you know the name of a process you can send it a message.
Processes share no resources.
Error handling is non-local.
Processes do what they are supposed to do or fail.
Joe Armstrong remarked in an interview with Rackspace in 2013: "If Java is 'write once, run anywhere', 
then Erlang is 'write once, run forever'.”[14]

Usage
In 2014, Ericsson reported Erlang was being used in its support nodes, and in GPRS, 3G and LTE mobile 
networks worldwide and also by Nortel and T-Mobile.[15]

As Tim Bray, director of Web Technologies at Sun Microsystems, expressed in his keynote at O'Reilly Open Source Convention (OSCON) in July 2008:

If somebody came to me and wanted to pay me a lot of money to build a large scale message handling 
system that really had to be up all the time, could never afford to go down for years at a time, I would unhesitatingly choose Erlang to build it in.

Erlang is the programming language used to code WhatsApp.[16]

Since being released as open source, 
Erlang has been spreading beyond Telecoms, 
establishing itself in other verticals such as FinTech, 
Gaming, Healthcare, Automotive, IoT and Blockchain. 
Apart from WhatsApp there are other companies listed as Erlang’s 
success stories: Vocalink (a MasterCard company), Goldman Sachs, 
Nintendo, AdRoll, Grindr, BT Mobile, Samsung,
OpenX, SITA.[17][18]
```

[https://en.wikipedia.org/wiki/Erlang_(programming_language)](https://en.wikipedia.org/wiki/Erlang_(programming_language))

### Used by :

WhatsApp Vocalink (a MasterCard company), Goldman Sachs, Nintendo, AdRoll, Grindr, BT Mobile, Samsung, OpenX and much more...

## My first month with Elixir

My first month plan starts with the language site documentation and a few other resources : 

* [Oficial site : https://elixir-lang.org/getting-started/introduction.html](https://elixir-lang.org/getting-started/introduction.html)
* [ELX pro BR video series Youtube](https://www.youtube.com/playlist?list=PLEs0qgZpGeOVQFnsN9t93rr5KjlKGU2oS)
* [Elixir in Action PDF Book](https://www.amazon.com/Elixir-Action-Sa%C5%A1a-Juri-cacute/dp/161729201X)

These are my resources for the next 45 days (or less). After that a new blog post will be shared with my learning experience and a probaly in the middle of it I will share some posts about these resources.

Thanks for your audience and follow me on my social media : 

* [Github](https://github.com/freddneos)
* [Linkedin](https://www.linkedin.com/in/fredericobezerra/)
* [Instagram](https://www.instagram.com/frederico.eu/)
* [Telegram Group](https://t.me/joinchat/LV4JQRl7VBWr677GO7Fv9w)
* [Discord EU Programmers  * under construction](<>)

*logo taken from:[https://www.udemy.com/elixir-for-beginners/](https://www.udemy.com/elixir-for-beginners/?couponCode=Save30%)*
