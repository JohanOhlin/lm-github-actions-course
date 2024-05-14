const core = requre('@actions/core')

async function run() {
    core.info('I am a custom JS action');
}

run()