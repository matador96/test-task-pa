/* Replace with your SQL commands */
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "login" VARCHAR(100) NOT NULL UNIQUE,
    "password" VARCHAR(100) NOT NULL,
    "createdAt" TIMESTAMPTZ DEFAULT NOW(),
    "updatedAt" TIMESTAMPTZ
);

INSERT INTO
    "public"."users" ("login", "password")
VALUES
    (
        'test',
        '$2b$10$.4.m3hrhkSfIr18LNNGJNO4HlS/DsaJBKDPO3tqNG4pNMUqz.LOwe'
    );

-- Создаем таблицу schools
CREATE TABLE schools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    number INT,
    region VARCHAR(50)
);

INSERT INTO
    schools (name, number, region)
VALUES
    (
        'Greenwood Elementary School',
        101,
        'North Region'
    ),
    (
        'Greenwood Elementary School',
        102,
        'North Region'
    ),
    ('Sunnydale School', 201, 'South Region'),
    ('Sunnydale School', 202, 'South Region'),
    ('Hilltop School', 301, 'West Region'),
    ('Hilltop School', 302, 'West Region'),
    ('Riverside School', 101, 'East Region'),
    ('Riverside School', 102, 'East Region'),
    ('Maplewood School', 401, 'Central Region'),
    ('Maplewood School', 402, 'Central Region'),
    ('Sunrise Elementary', 101, 'North Region'),
    ('Sunrise Elementary', 103, 'North Region'),
    ('Eastwood School', 201, 'East Region'),
    ('Eastwood School', 202, 'East Region'),
    ('Mountain View School', 301, 'West Region'),
    ('Mountain View School', 303, 'West Region'),
    ('Lakeside School', 201, 'South Region'),
    ('Lakeside School', 203, 'South Region'),
    ('Hillside Elementary', 401, 'Central Region'),
    ('Hillside Elementary', 403, 'Central Region'),
    ('Pine Hill School', 101, 'North Region'),
    ('Pine Hill School', 104, 'North Region'),
    ('Redwood School', 301, 'West Region'),
    ('Redwood School', 304, 'West Region'),
    ('Willow School', 201, 'South Region'),
    ('Willow School', 204, 'South Region'),
    ('Elmwood Elementary', 101, 'East Region'),
    ('Elmwood Elementary', 103, 'East Region'),
    ('Cedarwood School', 401, 'Central Region'),
    ('Cedarwood School', 404, 'Central Region');

CREATE TABLE high_schools (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    specialty VARCHAR(50),
    region VARCHAR(50)
);

INSERT INTO
    high_schools (name, specialty, region)
VALUES
    (
        'Green Valley High School',
        'Science',
        'North Region'
    ),
    (
        'Green Valley High School',
        'Math',
        'North Region'
    ),
    ('Central High School', 'Arts', 'South Region'),
    ('Central High School', 'Science', 'South Region'),
    ('Westfield High', 'Engineering', 'West Region'),
    ('Westfield High', 'Math', 'West Region'),
    (
        'Riverdale High School',
        'Science',
        'East Region'
    ),
    (
        'Riverdale High School',
        'Technology',
        'East Region'
    ),
    ('Maplewood High', 'Math', 'Central Region'),
    ('Maplewood High', 'Arts', 'Central Region'),
    ('Sunrise High School', 'Science', 'North Region'),
    (
        'Sunrise High School',
        'Technology',
        'North Region'
    ),
    ('East Side High', 'Arts', 'East Region'),
    ('East Side High', 'Engineering', 'East Region'),
    (
        'Mountain High School',
        'Technology',
        'West Region'
    ),
    ('Mountain High School', 'Math', 'West Region'),
    ('Lakeside High', 'Engineering', 'South Region'),
    ('Lakeside High', 'Science', 'South Region'),
    ('Hillside High School', 'Math', 'Central Region'),
    ('Hillside High School', 'Arts', 'Central Region'),
    ('Pine Grove High', 'Science', 'North Region'),
    ('Pine Grove High', 'Technology', 'North Region'),
    ('Redwood High', 'Engineering', 'West Region'),
    ('Redwood High', 'Math', 'West Region'),
    ('Willow High School', 'Science', 'South Region'),
    ('Willow High School', 'Arts', 'South Region'),
    ('Elmwood High', 'Technology', 'East Region'),
    ('Elmwood High', 'Science', 'East Region'),
    ('Cedar Hill High', 'Math', 'Central Region'),
    (
        'Cedar Hill High',
        'Engineering',
        'Central Region'
    );

CREATE TABLE universities (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    foundation_year INTEGER,
    building VARCHAR(255)
);

INSERT INTO
    universities (name, foundation_year, building)
VALUES
    ('University of Example', 1901, 'Main Building'),
    (
        'University of Example',
        1901,
        'Science Building'
    ),
    ('Tech Institute', 1965, 'Engineering Block'),
    ('Tech Institute', 1965, 'Library'),
    ('City University', 1980, 'Arts Building'),
    ('City University', 1980, 'Main Building'),
    ('National University', 1895, 'Main Hall'),
    ('National University', 1895, 'Science Center'),
    ('Greenfield College', 2005, 'West Wing'),
    ('Greenfield College', 2005, 'Library'),
    ('Greenfield College', 2005, 'Main Hall'),
    ('State University', 1975, 'North Building'),
    ('State University', 1975, 'South Building'),
    ('State University', 1975, 'Main Building'),
    ('Royal Academy', 1820, 'Central Building'),
    ('Royal Academy', 1820, 'North Wing'),
    ('Central Institute', 1920, 'Main Wing'),
    ('Central Institute', 1920, 'East Wing'),
    (
        'International University',
        2000,
        'Global Center'
    ),
    (
        'International University',
        2000,
        'Tech Building'
    ),
    ('East Coast College', 1985, 'Coastal Block'),
    ('East Coast College', 1985, 'Library'),
    ('Metropolitan College', 1992, 'Urban Wing'),
    ('Metropolitan College', 1992, 'Main Hall'),
    ('Sunset University', 1970, 'West Campus'),
    ('Sunset University', 1970, 'Library'),
    ('Northern Institute', 1945, 'Main Block'),
    ('Northern Institute', 1945, 'Science Wing'),
    ('Legacy College', 1950, 'Historical Building'),
    ('Legacy College', 1950, 'Library');