#!/bin/bash

read -d '' help <<- EOF
================================
|      Available options       |
================================
|   1) docker [params]         |
|   2) yarn [params]           |
|   6) up                      |
|   7) stop                    |
================================
EOF

function check_params {
    if [[ -z "${@: -$# + 1}" ]]; then
        echo "No arguments supplied"
        exit 1
    fi
}

function run_docker {
    shift
    check_params $@
    docker exec -it api.preach.dev $@
    exit 0
}

function yarn {
    shift
    check_params $@
    docker exec -it api.preach.dev yarn $@
    exit 0
}

function up {
    shift
    check_params $@ 1
    docker-compose -f docker-compose-dev.yml up -d --remove-orphans --force-recreate
    exit 0
}

function stop {
    shift
    check_params $@ 1
    docker-compose -f docker-compose-dev.yml stop
    exit 0
}

case $1 in
"docker" | 1 )
    run_docker $@
    ;;
"yarn" | 3 )
    yarn $@
    exit 0
    ;;
"up" | 6 )
    up $@
    exit 0
    ;;
"stop" | 7 )
    stop $@
    exit 0
    ;;
*)
    echo "$help"
    exit 1
    ;;
esac

exit 0