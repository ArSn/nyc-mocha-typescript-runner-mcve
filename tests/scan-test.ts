import assert from 'assert';
import { describe, it } from 'mocha';

import { default as doScannyStuff } from '../lib/scan';

describe( 'scan', () => {
    it( 'does scanny stuff', () => {
        assert.ok( 42 === 42, 'The answer to life, the universe and everything.' );
        assert.ok(true === doScannyStuff(), 'Scanny stuff is doing it.')
    } );
} );
