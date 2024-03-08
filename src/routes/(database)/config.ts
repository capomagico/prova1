import { database } from '$cms'; // eslint-disable-line
import * as P from '$cms/fields';

/* --- */

export default database({
	menu: P.Object({
		nome: P.String(),
		ristorante: P.String(),
		prezzo: P.String(),
		img: P.String()
	})
});
