// if one finds one's self needing to parse bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// access public directory, or something, i don't really understand this'un
// one needs 'path' for this
app.use(express.static(path.join(__dirname, '..', 'public')));
