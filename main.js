// wird immer geladen
import component1 from 'component1';
import component2 from 'component2';

// wird nur geladen, wenn ein Element mit der "id" auf der Seite ist
if (document.getElementById('id')) {
    import('./components/component3.js').then(
      module => {
        const component3 = module.default;
        component3();
      },
    );
  }