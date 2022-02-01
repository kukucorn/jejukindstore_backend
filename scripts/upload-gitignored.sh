SCRIPTS_DIR="$( cd "$( dirname "$0" )" && pwd -P )"
CONFIG_FILE_PATH=${SCRIPTS_DIR}/configs.sh

# import config variable
source ${CONFIG_FILE_PATH}

sftp -i ${PEM_KEY_PATH} ${REMOTE_USER}@${REMOTE_IP} <<EOF
    cd ${REMOTE_SRC_PATH}
    put -r ${LOCAL_CONFIGS_PATH}
    cd ${REMOTE_PUBLIC_DATA_PATH}
    put -r ${LOCAL_PUBLIC_DATA_ASSETS_PATH}
    bye
EOF
