
COPY public.profile (id, correo, name_complet, addres, num_telf, avatar, type, socio_id) FROM stdin;
1       prueba@gmail.com        Sergi Biosca Beneyto    C/Alacant       12      prueba.jpg      eeee    1
\.


--
-- Data for Name: socios; Type: TABLE DATA; Schema: public; Owner: bioskin
--

COPY public.socios (id, num_socio) FROM stdin;
1       289
\.

