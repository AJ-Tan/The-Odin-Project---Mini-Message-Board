--
-- PostgreSQL database dump
--

\restrict bOdT7GuoLfDTAMC4Crb4MuyJM5sR89WSbcpVxKT7n1fPApFbvab6VojL7lZ2lBb

-- Dumped from database version 18.3
-- Dumped by pg_dump version 18.3

-- Started on 2026-04-02 23:14:20

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 6 (class 2615 OID 16412)
-- Name: Mini Message Board; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA "Mini Message Board";


ALTER SCHEMA "Mini Message Board" OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 224 (class 1259 OID 16414)
-- Name: user_messages; Type: TABLE; Schema: Mini Message Board; Owner: postgres
--

CREATE TABLE "Mini Message Board".user_messages (
    id integer NOT NULL,
    text text,
    "user" text,
    added timestamp with time zone
);


ALTER TABLE "Mini Message Board".user_messages OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16413)
-- Name: user_messages_id_seq; Type: SEQUENCE; Schema: Mini Message Board; Owner: postgres
--

ALTER TABLE "Mini Message Board".user_messages ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME "Mini Message Board".user_messages_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 5027 (class 0 OID 16414)
-- Dependencies: 224
-- Data for Name: user_messages; Type: TABLE DATA; Schema: Mini Message Board; Owner: postgres
--

COPY "Mini Message Board".user_messages (id, text, "user", added) FROM stdin;
11	Hey! Just checking in—did you manage to finish the report we talked about yesterday?	Amando	2026-03-20 09:15:00+08
12	I’m still working on it, but I should be able to send a draft later this afternoon.	Charles	2026-03-20 10:42:00+08
13	No worries, take your time. Just make sure we have something before the meeting tomorrow morning.	Leonardo Da Vinci Capitanomentasa	2026-03-20 11:05:00+08
14	Good morning everyone! Just a reminder that we have a team sync at 10 AM today.	Maria	2026-03-21 08:00:00+08
15	Thanks for the reminder, Maria. I’ll prepare the updates from my side before the meeting starts.	John	2026-03-21 08:30:00+08
16	By the way, has anyone reviewed the new UI changes? I’d love to get some feedback.	Samantha	2026-03-21 13:15:00+08
17	I took a quick look earlier—it’s much cleaner now, especially the dashboard layout.	Kevin	2026-03-22 09:50:00+08
18	That’s great to hear! I’ll finalize the design and push it to staging later today.	Samantha	2026-03-22 11:20:00+08
19	Can someone help me with the deployment steps? I’m getting an error when running the build.	Alex	2026-03-23 14:10:00+08
20	Sure, I’ll hop on a quick call with you in a bit so we can troubleshoot it together.	Amando	2026-03-23 14:25:00+08
21	ewq	aj	2026-03-26 13:40:43+08
22	sss	eee	2026-03-26 13:59:43+08
23	w	gg	2026-03-26 14:49:53+08
\.


--
-- TOC entry 5033 (class 0 OID 0)
-- Dependencies: 223
-- Name: user_messages_id_seq; Type: SEQUENCE SET; Schema: Mini Message Board; Owner: postgres
--

SELECT pg_catalog.setval('"Mini Message Board".user_messages_id_seq', 23, true);


--
-- TOC entry 4878 (class 2606 OID 16419)
-- Name: user_messages user_messages_pkey; Type: CONSTRAINT; Schema: Mini Message Board; Owner: postgres
--

ALTER TABLE ONLY "Mini Message Board".user_messages
    ADD CONSTRAINT user_messages_pkey PRIMARY KEY (id);


-- Completed on 2026-04-02 23:14:20

--
-- PostgreSQL database dump complete
--

\unrestrict bOdT7GuoLfDTAMC4Crb4MuyJM5sR89WSbcpVxKT7n1fPApFbvab6VojL7lZ2lBb

