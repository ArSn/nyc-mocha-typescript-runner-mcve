import assert from 'assert';
import { describe, it } from 'mocha';

import { doScannyStuff, doOtherStuff } from '../lib/scan';

describe( 'scan', () => {
    it( 'does scanny stuff', () => {
        assert.ok( 42 === 42, 'The answer to life, the universe and everything.' );

        // toggle comment the two below lines to see change in code coverage
        assert.ok(true === doScannyStuff(), 'Scanny stuff is doing it.');
        // assert.ok(false === doOtherStuff(), 'Other stuff is doing it as well.');
    } );
} );
