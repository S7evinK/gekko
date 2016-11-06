## Information

The following commands were tested with
```
Docker version 1.12.3, build 6b644ec
docker-compose version 1.8.0, build f3628c7
```

## Getting started
```
docker pull s73vink/gekko:latest
```

## Running with your own config

The following command will mount the `$(pwd)/sample-config.js` to `/home/gekko/gekko/config.js` which will be used by gekko by default.
```
docker run -d --name gekko \
-v $(pwd)/sample-config.js:/home/gekko/gekko/config.js s73vink/gekko:latest
```

## Persisting history files (on host)

Create a local history directory with i.e.
```
mkdir -p /data/gekko/history
chown -hR 1234:1234 /data/gekko/history
```
(`chown -hR 1234:1234` since the user inside the container needs to write files to this folder)

Run with local history directory:
```
docker run -d --name gekko \
-v $(pwd)/sample-config.js:/home/gekko/gekko/config.js \
-v /data/gekko/history:/home/gekko/gekko/history s73vink/gekko:latest
```

## Persisting history files (in docker volume)

Create a new docker volume:
```
docker volume create --name gekko_data
```

Run with history inside docker volume:
```
docker run -d --name gekko \
-v $(pwd)/sample-config.js:/home/gekko/gekko/config.js \
-v gekko_data:/home/gekko/gekko/history/ s73vink/gekko:latest
```

## Running backtests

Run backtests with mounted config and history:
```
docker run -d --name gekko \
-v $(pwd)/sample-config.js:/home/gekko/gekko/config.js \
-v gekko_data:/home/gekko/gekko/history/ s73vink/gekko:latest node gekko.js --backtest
```


## Examples

For more examples (with docker-compose), check the examples folder. (mongodb, redis and more.)
