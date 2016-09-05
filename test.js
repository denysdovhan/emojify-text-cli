import test from 'tape';
import { emojifyTextCli, emojifyTextCliAsync } from './index';

test('emojifyTextCli', ({ equal, throws, end }) => {
  equal(emojifyTextCli('unicorns'), 'unicorns', 'basic');

  throws(() => { emojifyTextCli(); }, TypeError, 'empty input');
  throws(() => { emojifyTextCli(2); }, TypeError, 'invalid input');
  end();
});

test('async :: basic', ({ equal, end }) => {
  emojifyTextCliAsync('unicorns').then(result => {
    equal(result, 'unicorns');
    end();
  });
});

test('async :: empty input', ({ equal, end }) => {
  emojifyTextCliAsync().catch(result => {
    equal(result instanceof TypeError, true);
    end();
  });
});

test('async :: invalid input', ({ equal, end }) => {
  emojifyTextCliAsync(2).catch(result => {
    equal(result instanceof TypeError, true);
    end();
  });
});
