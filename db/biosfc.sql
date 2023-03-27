--
-- PostgreSQL database dump
--

-- Dumped from database version 15.1 (Debian 15.1-1.pgdg110+1)
-- Dumped by pg_dump version 15.1 (Debian 15.1-1.pgdg110+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: competiciones; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.competiciones (
    id integer NOT NULL,
    name character(100),
    clasificacion integer,

    primary key(id)
);


ALTER TABLE public.competiciones OWNER TO bioskin;

--
-- Name: entrada_reserved; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.entrada_reserved (
    id integer NOT NULL,
    id_entrada integer NOT NULL,
    id_user integer,
        -- foreign key(id_entrada) references entradas(id),
        -- foreign key(id_user) references users(id),

    primary key(id)
);


ALTER TABLE public.entrada_reserved OWNER TO bioskin;

--
-- Name: entradas; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.entradas (
    id integer NOT NULL,
    id_partido integer NOT NULL,
    asiento integer,
    graderia character(100),
    fila integer,
    precio numeric(100,0),
    disponible boolean,
        -- foreign key(id_partido) references partidos(id),

    primary key(id)
);


ALTER TABLE public.entradas OWNER TO bioskin;

--
-- Name: equipo; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.equipo (
    id integer NOT NULL,
    name character(50),
    city character(50),
    stadium character(50),
    shield character(50),
    lat numeric(100,0),
    long numeric(100,0),

    primary key(id)
);


ALTER TABLE public.equipo OWNER TO bioskin;

--
-- Name: integrantes; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.integrantes (
    id integer NOT NULL,
    id_player integer NOT NULL,
    id_tecn integer,
    name character(50),
    apellidos character(50),
    nacionalidad character(50),
    fech_naci date,
    avatar character(1000),
        -- foreign key(id_player) references jugadores(id),
        -- foreign key(id_tecn) references tecnicos(id),

    primary key(id)
);


ALTER TABLE public.integrantes OWNER TO bioskin;

--
-- Name: jugadores; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.jugadores (
    id integer NOT NULL,
    dorsal integer,
    goles integer,
    tarjetas_amar integer,
    tarjetas_roj integer,
    lesionado boolean,

    primary key(id)
);


ALTER TABLE public.jugadores OWNER TO bioskin;

--
-- Name: news; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.news (
    id integer NOT NULL,
    descr character(1000),
    img character(100),

    primary key(id)
);


ALTER TABLE public.news OWNER TO bioskin;

--
-- Name: partidos; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.partidos (
    id integer NOT NULL,
    id_competi integer NOT NULL,
    eq1 character(100),
    eq2 character(100),
    horario timestamp(6) with time zone,
    resultado character(1),
        -- foreign key(id_competi) references competiciones(id),

    primary key(id)
);


ALTER TABLE public.partidos OWNER TO bioskin;

--
-- Name: productos; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.productos (
    id integer NOT NULL,
    name character(100),
    type character(100),
    talla character(50),

    primary key(id)
);


ALTER TABLE public.productos OWNER TO bioskin;

--
-- Name: socios; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.socios (
    id integer NOT NULL,
    num_socio integer,

    primary key(id)
);


ALTER TABLE public.socios OWNER TO bioskin;

--
-- Name: tecnicos; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.tecnicos (
    id integer NOT NULL,
    type character(1),

    primary key(id)
);


ALTER TABLE public.tecnicos OWNER TO bioskin;

--
-- Name: tienda; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.tienda (
    id integer NOT NULL,
    name character(50),
    lat numeric(100,0),
    long numeric(100,0),

    primary key(id)
);


ALTER TABLE public.tienda OWNER TO bioskin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.users (
    id integer NOT NULL,
    id_profile integer NOT NULL,
    username character(50),
    passwd character(500),
        -- foreign key(id_profile) references profile(id),

    primary key(id)
);


ALTER TABLE public.users OWNER TO bioskin;

--
-- Name: profile; Type: TABLE; Schema: public; Owner: bioskin
--

CREATE TABLE public.profile (
    id integer NOT NULL,
    id_socio integer NOT NULL,
    correo character(50),
    name_complet character(100),
    addres character(100),
    num_telf numeric(9),
    avatar character(50),
    type character(50),
        -- foreign key(id_socio) references socios(id),

    primary key(id)
);


ALTER TABLE public.users OWNER TO bioskin;

--
-- Data for Name: competiciones; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.competiciones (id, name, clasificacion) FROM stdin;
\.


--
-- Data for Name: entrada_reserved; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.entrada_reserved (id, id_entrada, id_user) FROM stdin;
\.


--
-- Data for Name: entradas; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.entradas (id, id_partido, asiento, graderia, fila, precio, disponible) FROM stdin;
\.


--
-- Data for Name: equipo; Type: TABLE DATA; Schema: public; Owner: bioskin
--
-- INSERT INTO equipo VALUES (1, 'BIOS FC', 'Ontinyent', 'Stadium Bioskin', 'logo_bioskin.png', 39, -1)

COPY public.equipo (id, name, city, stadium, shield, lat, long) FROM stdin;
1       BIOS FC     Ontinyent       Stadium Bioskin     logo_bioskin    39      -1
\.

--
-- Data for Name: integrantes; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.integrantes (id, name, apellidos, nacionalidad, fech_naci, avatar, id_player, id_tecn) FROM stdin;
\.


--
-- Data for Name: jugadores; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.jugadores (id, dorsal, goles, tarjetas_amar, tarjetas_roj, lesionado) FROM stdin;
\.


--
-- Data for Name: news; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.news (id, descr, img) FROM stdin;
\.


--
-- Data for Name: partidos; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.partidos (id, eq1, eq2, horario, id_competi, resultado) FROM stdin;
\.


--
-- Data for Name: productos; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.productos (id, name, type, talla) FROM stdin;
\.


--
-- Data for Name: socios; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.socios (id, num_socio) FROM stdin;
\.


--
-- Data for Name: tecnicos; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.tecnicos (id, type) FROM stdin;
\.


--
-- Data for Name: tienda; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.tienda (id, name, lat, long) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.users (id, id_profile, username, passwd) FROM stdin;
\.


--
-- Data for Name: profile; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.profile (id, id_socio, correo, name_complet, addres, num_telf, avatar, type) FROM stdin;
\.


Name: competiciones competiciones_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin


ALTER TABLE ONLY public.competiciones
    ADD CONSTRAINT competiciones_pkey PRIMARY KEY (id);


--
-- Name: entrada_reserved entrada_reserved_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.entrada_reserved
    ADD CONSTRAINT entrada_reserved_pkey PRIMARY KEY (id_entrada);


--
-- Name: entradas entradas_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.entradas
    ADD CONSTRAINT entradas_pkey PRIMARY KEY (id_partido);


--
-- Name: equipo equipo_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.equipo
    ADD CONSTRAINT equipo_pkey PRIMARY KEY (id);


--
-- Name: integrantes integrantes_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.integrantes
    ADD CONSTRAINT integrantes_pkey PRIMARY KEY (id_player);


--
-- Name: jugadores jugadores_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.jugadores
    ADD CONSTRAINT jugadores_pkey PRIMARY KEY (id);


--
-- Name: news news_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.news
    ADD CONSTRAINT news_pkey PRIMARY KEY (id);


--
-- Name: partidos partidos_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.partidos
    ADD CONSTRAINT partidos_pkey PRIMARY KEY (id_competi);


--
-- Name: productos productos_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.productos
    ADD CONSTRAINT productos_pkey PRIMARY KEY (id);


--
-- Name: socios socios_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.socios
    ADD CONSTRAINT socios_pkey PRIMARY KEY (id);


--
-- Name: tecnicos tecnicos_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.tecnicos
    ADD CONSTRAINT tecnicos_pkey PRIMARY KEY (id);


--
-- Name: tienda tienda_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.tienda
    ADD CONSTRAINT tienda_pkey PRIMARY KEY (id);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: bioskin
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id_profile);



-- PostgreSQL database dump complete
--